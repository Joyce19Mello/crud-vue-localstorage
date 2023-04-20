<!DOCTYPE html>
<html>
<head>
  <title>CRUD with Vue.js and localStorage</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="app">
    <h1>CRUD with Vue.js and localStorage</h1>

    <!-- Form to add a new setting -->
    <form @submit.prevent="addSetting">
      <div>
        <label for="key">Key:</label>
        <input type="text" id="key" v-model="newSetting.key" required>
      </div>
      <div>
        <label for="value">Value:</label>
        <input type="text" id="value" v-model="newSetting.value" required>
      </div>
      <button type="submit">Add Setting</button>
    </form>

    <!-- Table of settings -->
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(setting, index) in settings" :key="setting.key">
          <td>{{ setting.key }}</td>
          <td>{{ setting.value }}</td>
          <td>
            <button @click="editSetting(index)">Edit</button>
            <button @click="deleteSetting(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <script src="app.js"></script>
</body>
</html>
