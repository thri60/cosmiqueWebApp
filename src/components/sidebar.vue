<template>
  <q-list bordered>
    <q-item clickable v-ripple :to="{ name:'bidding_account_limit'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Bidding Limit</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'watch_list'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Watch List</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'saved_searches' }">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Saved Searches</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'my_bids'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>My Bids</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'transactions'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Transactions</q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable v-ripple :to="{ name: 'contact_information'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Contact Information</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'billing_information' }">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Billing Information</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'password_login'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Email and Password</q-item-section>
    </q-item>
    <q-item clickable v-ripple :to="{ name: 'documents_and_ids'}">
      <q-item-section avatar>
        <q-icon color="primary" name="assessment" />
      </q-item-section>
      <q-item-section>Document and IDs</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {

}
</script>
