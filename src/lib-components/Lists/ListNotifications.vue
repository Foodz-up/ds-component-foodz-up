<template>
  <div>
    <CardNotification
      v-for="(notification, index) in listNotifications"
      :key="index"
      class="mb-5 mr-1"
      :message="notification.message"
      :status="notification.status"
    />
  </div>
</template>