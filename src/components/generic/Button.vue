<template>
	<div>
		<b-button @click="onClick">
			{{ text }}
		</b-button>
	</div>
</template>

<script>
export default {
	name: "Button",
	props: {
		text: {
			type: String,
			required: true
		},
		onClick: {
			type: Function,
			default: () => {}
		}
	}
};
</script>