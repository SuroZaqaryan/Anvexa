<template>
  <div>
    <!-- Header content goes here -->
    <slot name="header"></slot>

    <main>
      <slot></slot>
    </main>

    <!-- Footer content goes here -->
    <slot name="footer"></slot>
  </div>
</template>
