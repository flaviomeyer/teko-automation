Azure resources
=========

This Ansible playbook has the ability to create multiple Azure resources automatically. 

Requirements
------------

Following packages have to be installed on your local machine or server to run this playbook:

- Python 3
- [azure.azcollection](https://github.com/ansible-collections/azure)

Role Variables
--------------

**create_rg.yml**

| Name          | Description             | Default Value |
| --------------| ------------------------| --------------|
| `rg_name`     | Resource group name     |               |
| `rg_location` | Resource group location |               |

**create_vnet.yml**

| Name                    | Description                         | Default Value |
| ------------------------| ------------------------------------| --------------|
| `vnet_resource_group`   | Virtual network resource group name |               |
| `vnet_name`             | Virtual network name                |               |
| `vnet_address_prefixes` | Virtual network address prefixes    |               |

**create_subnet.yml**

| Name                     | Description                 | Default Value |
| -------------------------| --------------------------- | --------------|
| `subnet_resource_group`  | Subnet resource group name  |               |
| `subnet_name`            | Subnet name                 |               |
| `subnet_address_prefix`  | Subnet address prefix       |               |
| `subnet_virtual_network` | Subnet virtual network name |               |

**create_ip.yml**

| Name                   | Description                   | Default Value |
| -----------------------| ------------------------------| --------------|
| `ip_resource_group`    | Public IP resource group name |               |
| `ip_name`              | Public IP name                |               |
| `ip_allocation_method` | Public IP allocation method   |               |

**create_nsg.yml**

| Name                         | Description             | Default Value |
| ---------------------------- | ------------------------| --------------|
| `nsg_resource_group`         | NSG resource group name |               |
| `nsg_name`                   | NSG name                |               |

**create_nic.yml**

| Name                         | Description              | Default Value |
| ---------------------------- | ------------------------ | --------------|
| `nic_resource_group`         | NIC resource group name  |               |
| `nic_name`                   | NIC name                 |               |
| `nic_virtual_network`        | NIC virtual network name |               |
| `nic_subnet_name`            | NIC subnet name          |               |
| `nic_security_group`         | NIC NSG name             |               |
| `nic_public_ip_address_name` | NIC Public IP name       |               |

**create_vm.yml**

| Name                         | Description             | Default Value |
| -----------------------------| ----------------------- | --------------|
| `vm_resource_group`          | VM resource group name  |               |
| `vm_name`                    | VM name                 |               |
| `vm_size`                    | VM size                 |               |
| `vm_admin_username`          | VM admin username       |               |
| `vm_admin_password`          | VM admin password       |               |
| `vm_network_interfaces`      | VM NIC name             |               |
| `vm_managed_disk_type`       | VM managed disk type OS |               |
| `vm_os_type`                 | VM OS type              |               |
| `vm_image_offer`             | VM image offer          |               |
| `vm_image_publisher`         | VM image publisher      |               |
| `vm_image_sku`               | VM image sku            |               |
| `vm_image_version`           | VM image version        |               |


Example Playbook
----------------

Including an example of how to use the *virtualmachine* role

    - hosts: localhost
      roles:
         - { role: virtualmachine }

License
-------

BSD

Author Information
------------------

- [Flavio Meyer](https://github.com/meyerf99)
- [Michael Simões Mangold](https://github.com/Pleger96)