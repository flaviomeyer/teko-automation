<template>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<div id="app" class="container my-3">
		<h2>
			Create Virtual machine
		</h2>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Resource group name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_vm_resource_group">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Virtual machine name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_vm_name">
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">Location</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_vm_size" required="required">
					<option value="Standard_B1s">Standard B1s</option>
        			<option value="Standard_B2s">Standard B2s</option>
				</select>
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">OS type based</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_vm_os_type" required="required">
					<option value="Linux">Linux</option>
        			<option value="Windows">Windows</option>
				</select>
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">OS</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_vm_image_offer" required="required">
					<option value="CentOS">CentOS</option>
        			<option value="WindowsServer">Windows Server</option>
				</select>
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">OS image publisher</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_vm_image_publisher" required="required">
					<option value="OpenLogic">OpenLogic</option>
        			<option value="MicrosoftWindowsServer">Microsoft</option>
				</select>
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">OS version</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_vm_image_sku" required="required">
					<option value="7.5">7.5</option>
        			<option value="2016-Datacenter">2016 Datacenter</option>
					<option value="2019-Datacenter">2019 Datacenter</option>
					<option value="2022-Datacenter">2022 Datacenter</option>
				</select>
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Admin username</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_vm_admin_username">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Admin password</label> 
			<div class="col-8">
				<input id="text" name="text" type="password" class="form-control" ref="post_vm_admin_password">
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">Location</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_vm_managed_disk_type" required="required">
					<option value="Standard_LRS">Standard HDD LRS</option>
        			<option value="StandardSSD_LRS">Standard SSD LRS</option>
					<option value="Premium_LRS">Premium SSD LRS</option>
				</select>
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Virtual network name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_nic_virtual_network">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Subnet name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_nic_subnet_name">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Network interface name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_nic_name">
			</div>
		</div>		
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Public IP name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_ip_name">
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">Public IP allocation</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_ip_allocation_method" required="required">
					<option value="Dynamic">Dynamic</option>
        			<option value="Static">Static</option>
				</select>
			</div>
		</div>
		<div class="col-14">	
			<button class="btn btn-sm btn-primary" @click="postData">Submit</button>
		  	<button class="btn btn-sm btn-warning ml-2" @click="clearPostOutput">Clear</button>
			<div v-if="postResult" class="alert alert-secondary mt-2" role="alert"><pre>{{postResult}}</pre></div>
		</div>
	</div>
</template>
  
  <script>
  import http from ".././http-common";
  
  export default {
	name: "App",
	data() {
	  return {
		getResult: null,
		postResult: null,
		putResult: null,
		deleteResult: null,
	  }
	},
	methods: {
	  fortmatResponse(res) {
		return JSON.stringify(res, null, 2);
	  },
  
	  async postData() {
		const postData = {
			vm_resource_group: this.$refs.post_vm_resource_group.value,
			vm_name: this.$refs.post_vm_name.value,
			vm_size: this.$refs.post_vm_size.value,
			vm_admin_username: this.$refs.post_vm_admin_username.value,
			vm_admin_password: this.$refs.post_vm_admin_password.value,
			vm_network_interfaces: this.$refs.post_nic_name.value,
			vm_managed_disk_type: this.$refs.post_vm_managed_disk_type.value,
			vm_os_type: this.$refs.post_vm_os_type.value,
			vm_image_offer: this.$refs.post_vm_image_offer.value,
			vm_image_publisher: this.$refs.post_vm_image_publisher.value,
			vm_image_sku: this.$refs.post_vm_image_sku.value,
			vm_image_version: 'latest',
			nic_resource_group: this.$refs.post_vm_resource_group.value,
			nic_virtual_network: this.$refs.post_nic_virtual_network.value,
			nic_subnet_name: this.$refs.post_nic_subnet_name.value,
			nic_name: this.$refs.post_nic_name.value,
			nic_security_group: this.$refs.post_vm_name.value,
			nic_public_ip_address_name: this.$refs.post_ip_name.value,
			ip_name: this.$refs.post_ip_name.value,
			ip_resource_group: this.$refs.post_vm_resource_group.value,
			ip_allocation_method: this.$refs.post_ip_allocation_method.value,
			nsg_resource_group: this.$refs.post_vm_resource_group.value,
			nsg_name: this.$refs.post_vm_name.value,
		};
  
		try {
		  const res = await http.post("/playbooks/playbook.yml", postData);
  
		  const result = {
			status: res.status + "-" + res.statusText,
			headers: res.headers,
			data: res.data,
		  };
  
		  this.postResult = this.fortmatResponse(result);
		} catch (err) {
		  this.postResult = this.fortmatResponse(err.response?.data) || err;
		}
	  },
  
	  clearGetOutput() {
		this.getResult = null;
	  },
  
	  clearPostOutput() {
		this.postResult = null;
	  },
	}
  }
  </script>

<style>
#app {
	margin: auto;
	background: white;
	text-align: left;
	border-radius: 10px;
}
label {
	color: #aaa;
	display: inline-block;
	font-size: 0.6em;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
}
input {
	display: block;
	padding: 10px 6px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	color: #555;
}
h2 {
	padding: 20px;
}
</style>