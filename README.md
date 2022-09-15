TEKO 2. Semester Projektarbeit
=========

Einleitung
----------

Die Firma Centicom AG hat im Jahr 2021 expandiert, indem sie zwei kleinere KMU aufgekauft hat. Die Mitarbeiterzahl hat sich seither verdoppelt, was auch die bestehende IT-Abteilung zu spüren bekam. Die aktuelle IT-Infrastruktur erfüllt die Anforderungen des Wachstums nicht mehr und muss revidiert werden. Die anhaltende Corona Pandemie verschärft die ganze Situation und zwingt die Führung der Centicom AG zu schnellem Handeln. 

Nebst der Aufstockung des IT-Supports durch zusätzliche Mitarbeiter, möchte man für die Zukunft ein möglichst automatisiertes Deployment von Server & Clients einführen. Bisher wurden alle Systeme manuell durch einen IT-Spezialisten aufgesetzt und konfiguriert. Spätestens beim Onboarding neuer Mitarbeiter hat man gemerkt, dass viel Zeit für diese Routine Tätigkeit verloren ging. Standardisierte Systeme sucht man vergeblich, weil jedes System anders aufgesetzt wurde. Die Folge sind Fehler, welche bereits beim Stagingprozess vermieden würden.

Die Centicom AG hat uns engagiert und beauftragt, bis Mitte September 2022 eine zukunftsorientierte Automation von Server einzuführen. 

Umsetzung
---------

Für die Realisierung der Server Automatisation auf Microsoft Azure Infrastruktur wurden folgende Technologien verwendet:

- Frontend: [Vue.js](https://vuejs.org/)
- Backend: [Ansible Runner Service](https://github.com/ansible/ansible-runner-service) basierend auf Python
- Automatisierungstool: [Ansible](https://www.ansible.com/)

Die Ersteller des Projekts haben darauf geachtet, dass wenn möglich OpenSource Software zum Einsatz kommt, welches sich sehr gut zur Anpassung und Weiterentwicklung der Lösung eignet.

Wie die einzelnen Software Komponenten installiert und konfiguriert werden müssen, wird in den jeweiligen README's beschrieben.

Da der Auftraggeber eine englische Version der Installationsanleitung wünscht, wird die Software komplett in englischer Sprache erklärt.

Struktur
-------

- [Vue.js UI](ui/)
- [Ansible Runner Service](ansible-runner-service/)
- [Ansible Rolle & Playbook](ansible/)

License
-------

BSD

Author Information
------------------

- [Flavio Meyer](https://github.com/meyerf99)
- [Michael Simões Mangold](https://github.com/Pleger96)