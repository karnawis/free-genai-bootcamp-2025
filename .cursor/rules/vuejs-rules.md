# Vue.js Best Practices and Rules

## Core Rules for Junior Developers

### 1. Always Use Props for Component Communication

```vue
<!-- ❌ BAD: Directly modifying parent data -->
<template>
  <div>
    <button @click="$parent.count++">Increment</button>
  </div>
</template>

<!-- ✅ GOOD: Using props and emitting events -->
<template>
  <div>
    <button @click="$emit('increment')">Increment</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>
```

### 2. Use v-for with Key Attribute

```vue
<!-- ❌ BAD: No key attribute -->
<template>
  <ul>
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
</template>

<!-- ✅ GOOD: Using unique key -->
<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
```

### 3. Use Computed Properties Instead of Complex Template Logic

```vue
<!-- ❌ BAD: Complex logic in template -->
<template>
  <div>
    {{
      items
        .filter((item) => item.completed)
        .map((item) => item.name)
        .join(", ")
    }}
  </div>
</template>

<!-- ✅ GOOD: Using computed property -->
<template>
  <div>
    {{ completedItemNames }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Task 1", completed: true },
        { name: "Task 2", completed: false },
      ],
    };
  },
  computed: {
    completedItemNames() {
      return this.items
        .filter((item) => item.completed)
        .map((item) => item.name)
        .join(", ");
    },
  },
};
</script>
```

## Additional Tips

1. **Component Organization**

   - Keep components small and focused
   - Use single-file components (.vue files)
   - Follow a clear naming convention

2. **State Management**

   - Use Vuex for complex state management
   - Keep component state local when possible
   - Avoid deeply nested component communication

3. **Performance**

   - Use v-show for frequently toggled elements
   - Avoid unnecessary watchers
   - Implement lazy loading for routes

4. **Common Gotchas to Avoid**
   - Don't modify props directly
   - Don't use arrow functions in methods or computed properties
   - Don't forget to unsubscribe from events before component destruction
