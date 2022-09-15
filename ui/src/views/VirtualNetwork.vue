<template>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<div id="app" class="container my-3">
		<h2>
			Create Virtual network
		</h2>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Resource group name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_vnet_resource_group">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Virtual network name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_vnet_name">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Virtual network address prefix</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_vnet_address_prefixes">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Subnet name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_subnet_name">
			</div>
		</div>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Subnet address prefix</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_subnet_address_prefix">
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
			vnet_resource_group: this.$refs.post_vnet_resource_group.value,
			vnet_name: this.$refs.post_vnet_name.value,
			vnet_address_prefixes: this.$refs.post_vnet_address_prefixes.value,
			subnet_resource_group: this.$refs.post_vnet_resource_group.value,
			subnet_virtual_network: this.$refs.post_vnet_name.value,
			subnet_name: this.$refs.post_subnet_name.value,
			subnet_address_prefix: this.$refs.post_subnet_address_prefix.value,
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