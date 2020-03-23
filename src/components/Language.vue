<template>
  <div class="language">
    <h1 :class="[ 'normal', { isInactive: showMoreSection }]">{{ title }}</h1>
    <p>
      {{ description }}
    </p>
    
    <a v-show="!showMoreSection" @click.prevent="showMoreSection = !showMoreSection" href="#">READ MORE...</a>
    
    <div v-show="showMoreSection" class="more-section">
      <a @click.prevent="showMoreSection = !showMoreSection" href="#">HIDE...</a>

      <h3>Use cases</h3>
      <span>
        {{ useCases }}
      </span>
    </div>
    
  </div>
</template>

<script>
function validate_string(value) {
  return (typeof value === 'string' || value instanceof String)
}

function lorem_ipsum() {
  return "\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default {
  name: "Language",
  data: function() {
    return {
      showMoreSection: false
    }
  },
  props: {
    title: {
      type: String,
      default: "Title",
      validator: function(value) {
        return validate_string(value)
      }
    },
    description: {
      type: String,
      default: lorem_ipsum(),
      validator: function(value) {
        return validate_string(value)
      }
    },
    useCases: {
      type: String,
      default: "No use cases",
      validator: function(value) {
        return validate_string(value)
      }
    }
  }
}
</script>

<style scoped>
.language {
  width: 200px;
  float: left;
  margin: 8px;
}

.normal {
  color: goldenrod;
}

.isInactive {
  color: greenyellow;
}


</style>