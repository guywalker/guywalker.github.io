window.LucidworksCloudEnvironment = {
  host: 'nobel.divedeeper.io',
  port: 80,
  context_path: '/',
  app_id: 'SOME APP ID'
};

window.LucidworksCloudConfig = {
  apiEndpoint: 'twigkit/api/core/services/platform/search/',
  app_id: '',
  embed_key: '',

  // Platform connection details
  platform: {
    conf: 'platforms.workflow.laureates'
  },

  // Default query settings
  query: {
    resultsPerPage: 10,
    filters: [
      {
        field: 'Country of birth',
        value: 'USA',
        exclude: true
      }
    ]
  },

  // Component configurations
  "components": {
    "tabs":{"fieldName":"Prize Category","classes":"es-tags-tabs"},
    "search-box": {
      "instant-results": {
        "platform": {
          "conf": "platforms.workflow.laureates"
        },
        "result": [
          {
            "children": [
              {
                "type": "field",
                "options": {
                  "name": "firstname",
                  "styling": "title",
                  "urlfield": "id",
                  "urlPrefix": "http://nobel.divedeeper.io/#/laureates/"
                }
              }
            ]
          }
        ]
      }
    },
    "facets": {
      "facetNames": "Country of affiliation,gender=Gender,facialhair=Facial Hair",
    },
    "results": {
      "styling": "cards-md-2",
      "result": [
        {
          "children": [
            {
              "type": "field",
              "options": {
                "name": "firstname",
                "styling": "title",
                "urlfield": "id",
                "urlPrefix": "http://nobel.divedeeper.io/#/laureates/",
                "target": "_blank"
              }
            },
            {
              "type": "field",
              "options": {
                "name": "Prize Category",
                "query": true
              }
            },
            {
              "type": "field",
              "options": {
                "name": "gender",
                "label": "Gender",
                "query": true
              }
            },
            {
              "type": "field",
              "options": {
                "name": "motivation",
                "styling": "description"
              }
            }
          ]
        }
      ]
    },
    "breadcrumbs": {
      "groupByField": true
    },
    "smart-panel":{
      "type": "more-like-this",
      "platform": {
        "conf": "platforms.workflow.laureates"
      },
      "show":3
    }
  }
};
