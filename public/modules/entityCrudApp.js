document.addEventListener('DOMContentLoaded', () => {
  const entityKey = document.body.dataset.entity;
  const config = window.EntityConfigs?.[entityKey];
  if (!config) return;

  const app = window.createRemoteCrudApp({
    api: {
      list: () => window.Api.list(config.endpoint),
      create: (data) => window.Api.create(config.endpoint, data),
      update: (id, data) => window.Api.update(config.endpoint, id, data),
      delete: (id) => window.Api.remove(config.endpoint, id)
    },
    createTitle: `Registrar ${config.singular.toLowerCase()}`,
    editTitle: `Editar ${config.singular.toLowerCase()}`,
    fields: config.fields,
    columns: config.columns,
    messages: config.messages
  });

  app.init();
});
