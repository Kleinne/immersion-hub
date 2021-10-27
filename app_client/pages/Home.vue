<script setup name="Home"></script>

<template>
  <div>
    hello, {{ $page.props.user.name }}
    <slot />
  </div>
</template>
