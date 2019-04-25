# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 1.8"

FISHWAY_SHARED_FOLDER_TYPE = ENV.fetch("FISHWAY_SHARED_FOLDER_TYPE", "nfs")
if FISHWAY_SHARED_FOLDER_TYPE == "nfs"
  if not Vagrant::Util::Platform.linux? then
    FISHWAY_MOUNT_OPTIONS = ['vers=3', 'udp', 'actimeo=1']
  else
    FISHWAY_MOUNT_OPTIONS = ['rw', 'vers=3', 'tcp', 'nolock', 'actimeo=1']
  end
else
  if ENV.has_key?("FISHWAY_MOUNT_OPTIONS")
    FISHWAY_MOUNT_OPTIONS = ENV.fetch("FISHWAY_MOUNT_OPTIONS").split
  else
    FISHWAY_MOUNT_OPTIONS = ["rw"]
  end
end

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder ".", "/vagrant", type: FISHWAY_SHARED_FOLDER_TYPE, mount_options: FISHWAY_MOUNT_OPTIONS
  config.vm.synced_folder "~/.aws", "/home/vagrant/.aws", type: FISHWAY_SHARED_FOLDER_TYPE, mount_options: FISHWAY_MOUNT_OPTIONS

  config.vm.synced_folder "~/.aws", "/home/vagrant/.aws"

  config.vm.provider :virtualbox do |vb|
    vb.memory = 2048
    vb.cpus = 2
  end

  # Civic Apps Port Mappings
  # Webpack Dev Server
  config.vm.network :forwarded_port, guest: 3474, host: 3474

  # NFS
  config.vm.network "private_network", ip: "192.168.110.221"

  # Change working directory to /vagrant upon session start.
  config.vm.provision "shell", inline: <<SCRIPT
    if ! grep -q "cd /vagrant" "/home/vagrant/.bashrc"; then
      echo "cd /vagrant" >> "/home/vagrant/.bashrc"
    fi
SCRIPT

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "deployment/ansible/pwd-fishway.yml"
    ansible.galaxy_role_file = "deployment/ansible/roles.yml"
  end
end
