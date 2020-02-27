<template>
	<div id="app">
		<div class="app-container">
			<h3>To Do List</h3>
			<b-nav pills>
				<b-nav-item to="/all" exact exact-active-class="active">
					All
				</b-nav-item>
				<b-nav-item to="/pending" exact exact-active-class="active">
					Pending
				</b-nav-item>
				<b-nav-item to="/missed" exact exact-active-class="active">
					Missed
				</b-nav-item>
				<b-nav-item to="/completed" exact exact-active-class="active">
					Completed
				</b-nav-item>
			</b-nav>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		setActiveLink(e) {
			if (e.target.classList.contains("nav-link")) {
				e.currentTarget
					.querySelectorAll(".nav-link")
					.forEach(item => item.classList.remove("active"));
				e.target.classList.add("active");
			}
		}
	}
};
</script>

<style lang="scss">
#app {
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(0, 119, 155);
}

.app-container {
	background-color: whitesmoke;
	height: 80%;
	width: 700px;
	border: 1px solid rgb(182, 182, 182);
	border-radius: 8px;
}
</style>
