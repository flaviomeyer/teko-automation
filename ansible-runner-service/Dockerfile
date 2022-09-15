# Builder (Donor) image Rocky Linux 9
FROM rockylinux:9

# Ansible Runner Version
ARG ANSIBLE_RUNNER_VERSION="2.2.1"
ARG SERVICE_DIR="/root/ansible-runner-service"

# RPM package list
ARG RPM_PKGS="\
              bash wget unzip nginx supervisor python3-psutil \
              python3-pexpect bubblewrap gcc \
              bzip2  openssh openssh-clients \
              python3 python3-devel python3-setuptools \
              glibc-locale-source glibc-langpack-en \
"
# Pip package list
ARG PIP_PKGS="\
              ansible cryptography docutils psutil PyYAML \
              pyOpenSSL flask flask-restful uwsgi netaddr notario \
"

# DNF Install Dependencies
RUN dnf update -y -q \
     && dnf install -y -q epel-release \
     && dnf install -y -q ${RPM_PKGS} \
     && dnf clean all \
     && rm -rf /var/cache/yum \
    && echo

# PIP Install Dependencies
RUN set -ex \
     && /usr/bin/python3 -m \
          pip install ${PIP_PKGS} \
     && /usr/bin/python3 -m \
          pip install --no-cache-dir ansible-runner==${ANSIBLE_RUNNER_VERSION} \
    && echo \
    && ansible-galaxy collection install azure.azcollection \
    && pip3 install -r ~/.ansible/collections/ansible_collections/azure/azcollection/requirements-azure.txt


# Prepare folders for shared access and ssh
RUN set -ex \
     && mkdir -p \
          /root/.ssh \
          /etc/ansible-runner-service \
          /usr/share/ansible-runner-service/{artifacts,env,project,inventory,client_cert} \
     && localedef -c -i en_US -f UTF-8 en_US.UTF-8 \
    && echo

# Install Ansible Runner
WORKDIR /root
COPY ./*.py           ${SERVICE_DIR}/
COPY ./*.yaml         ${SERVICE_DIR}/
COPY ./samples        ${SERVICE_DIR}/samples
COPY ./runner_service ${SERVICE_DIR}/runner_service

# Copy Ansible Role & Playbook
COPY ./project  /usr/share/ansible-runner-service/project/

# Load configuration files
# Nginx config
COPY misc/nginx/nginx.conf          /etc/nginx/
# Nginx SSL configuration
COPY misc/nginx/certs/server.*          /etc/ansible-runner-service/certs/
# Ansible Runner Service nginx virtual server
COPY misc/nginx/ars_site_nginx.conf /etc/nginx/conf.d
# Ansible Runner Service uwsgi settings
COPY misc/nginx/uwsgi.ini           ${SERVICE_DIR}
# Supervisor start sequence
COPY misc/nginx/supervisord.conf    ${SERVICE_DIR}

CMD ["/usr/bin/supervisord", "-c", "/root/ansible-runner-service/supervisord.conf"]