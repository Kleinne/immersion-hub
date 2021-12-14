<script setup name="Home"></script>

<template>
  <div>
    hello, {{ $page.props.auth.user.name }}
    <slot />
  </div>
</template>
