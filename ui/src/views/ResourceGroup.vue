<template>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<div id="app" class="container my-3">
		<h2>
			Create Resource group
		</h2>
		<div class="form-group row">
			<label for="text" class="col-4 col-form-label">Resource group name</label> 
			<div class="col-8">
				<input id="text" name="text" type="text" class="form-control" ref="post_resource_name">
			</div>
		</div>
		<div class="form-group row">
			<label for="select" class="col-4 col-form-label">Location</label> 
			<div class="col-8">
				<select id="select" name="select" class="custom-select" ref="post_resource_location" required="required">
					<option value="australiacentral">Australia Central</option>
        			<option value="northeurope">North Europe</option>
        			<option value="switzerlandnorth">Switzerland North</option>
        			<option value="westcentralus">West Central US</option>
        			<option value="westeurope">West Europe</option>
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
		rg_name: this.$refs.post_resource_name.value,
		rg_location: this.$refs.post_resource_location.value,
	  };
  
		try {
		  const res = await http.post("/playbooks/playbook.yml", postData);
		  //const res = await http.post("/playbooks/playbook.yml", { rg_name: 'Test3', rg_location: 'australiacentral'});
  
		  // const res = await http.post("/playbooks/playbook.yml", {
		  //});
  
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