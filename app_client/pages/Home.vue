<script setup name="Home"></script>

<template>
  <InertiaHead title="Home" />

  <div>
    hello, {{ $page.props.auth.user.name }}
    <slot />
  </div>
</template>
