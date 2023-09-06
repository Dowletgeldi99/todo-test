
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/api/v1": {
        "get": {
          "operationId": "AppController_getHello",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/app-url/{token}": {
        "get": {
          "operationId": "AppController_getMobileAppUrl",
          "parameters": [
            {
              "name": "token",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/auth/register": {
        "post": {
          "operationId": "AuthController_register",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignUpDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User has been successfully created.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEntity"
                  }
                }
              }
            },
            "403": {
              "description": "Forbidden."
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/auth/login": {
        "post": {
          "operationId": "AuthController_login",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignInDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/auth/me": {
        "get": {
          "operationId": "AuthController_me",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/api/v1/auth/forgot-password": {
        "post": {
          "operationId": "AuthController_forgotPassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ForgotPasswordDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/auth/reset-password": {
        "post": {
          "operationId": "AuthController_resetPassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResetPasswordDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/auth/verifyCode": {
        "post": {
          "operationId": "AuthController_initiatePhoneNumberVerification",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/auth/confirm-verifyCode": {
        "post": {
          "operationId": "AuthController_confirmPhoneNumber",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CheckVerificationCodeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/v1/users/count": {
        "get": {
          "operationId": "UsersController_getCount",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/api/v1/users/{id}": {
        "get": {
          "operationId": "UsersController_getUserById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/api/v1/users/products/saved": {
        "get": {
          "operationId": "UsersController_getSavedProducts",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/api/v1/users/products/{productId}/save": {
        "post": {
          "operationId": "UsersController_saveProduct",
          "parameters": [
            {
              "name": "productId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/api/v1/users/products/{productId}/unSave": {
        "post": {
          "operationId": "UsersController_unSaveProduct",
          "parameters": [
            {
              "name": "productId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/api/v1/products/all": {
        "post": {
          "operationId": "ProductsController_getAllProducts",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetProductsFilterDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Products"
          ]
        }
      },
      "/api/v1/products/my/{status}": {
        "get": {
          "operationId": "ProductsController_getUserProducts",
          "parameters": [
            {
              "name": "status",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Products"
          ]
        }
      },
      "/api/v1/products/{id}": {
        "get": {
          "operationId": "ProductsController_getById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Products"
          ]
        }
      },
      "/api/v1/products": {
        "post": {
          "operationId": "ProductsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateProductDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Products"
          ]
        }
      },
      "/api/v1/products/{id}/images": {
        "post": {
          "operationId": "ProductsController_productAddImages",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Products"
          ]
        }
      },
      "/api/v1/products/{id}/status": {
        "put": {
          "operationId": "ProductsController_updateProductStatus",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateProductStatusDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Products"
          ]
        }
      },
      "/api/v1/image-upload/single": {
        "post": {
          "operationId": "ImageUploadController_uploadSingle",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/image-upload/many": {
        "post": {
          "operationId": "ImageUploadController_uploadMany",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          }
        }
      },
      "/api/v1/productParameters/byProperty": {
        "get": {
          "operationId": "ProductParametersController_getParametersByProperties",
          "parameters": [
            {
              "name": "propertyTypeId",
              "required": true,
              "in": "query",
              "example": "_id",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "dealTypeId",
              "required": true,
              "in": "query",
              "example": "_id",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "isFilter",
              "required": true,
              "in": "query",
              "example": true,
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameters": {
        "get": {
          "operationId": "ProductParametersController_getParameters",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        },
        "post": {
          "operationId": "ProductParametersController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateProductParameterDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameters/admin": {
        "get": {
          "operationId": "ProductParametersController_getParametersAdmin",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameters/admin/{id}": {
        "get": {
          "operationId": "ProductParametersController_getParameterById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameters/{id}/parameterItems": {
        "post": {
          "operationId": "ProductParametersController_addParameterItems",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddParameterItemsDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameters/{id}/addPropertyTypes": {
        "post": {
          "operationId": "ProductParametersController_addPropertyTypes",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddPropertyTypesDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameters/{id}/addDealTypes": {
        "post": {
          "operationId": "ProductParametersController_addDealTypes",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddDealTypesDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameters"
          ]
        }
      },
      "/api/v1/productParameterItems": {
        "get": {
          "operationId": "ProductParameterItemController_getAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameterItems"
          ]
        }
      },
      "/api/v1/productParameterItems/autocomplete": {
        "get": {
          "operationId": "ProductParameterItemController_getAutocomplete",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ProductParameterItems"
          ]
        }
      },
      "/api/v1/dealTypes": {
        "get": {
          "operationId": "DealTypesController_getAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        },
        "post": {
          "operationId": "DealTypesController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateDealTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        }
      },
      "/api/v1/dealTypes/autocomplete": {
        "get": {
          "operationId": "DealTypesController_getAllAutoComplete",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        }
      },
      "/api/v1/dealTypes/count": {
        "get": {
          "operationId": "DealTypesController_getCount",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        }
      },
      "/api/v1/dealTypes/admin": {
        "get": {
          "operationId": "DealTypesController_getAllAdmin",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        }
      },
      "/api/v1/dealTypes/admin/{id}": {
        "get": {
          "operationId": "DealTypesController_getById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        }
      },
      "/api/v1/dealTypes/{dealTypeId}": {
        "put": {
          "operationId": "DealTypesController_update",
          "parameters": [
            {
              "name": "dealTypeId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateDealTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        },
        "delete": {
          "operationId": "DealTypesController_delete",
          "parameters": [
            {
              "name": "dealTypeId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DealTypes"
          ]
        }
      },
      "/api/v1/propertyTypes": {
        "get": {
          "operationId": "PropertyTypesController_getAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        },
        "post": {
          "operationId": "PropertyTypesController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreatePropertyTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/autocomplete": {
        "get": {
          "operationId": "PropertyTypesController_getAutocomplete",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/count": {
        "get": {
          "operationId": "PropertyTypesController_getCount",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/admin": {
        "get": {
          "operationId": "PropertyTypesController_getAllAdmin",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/admin/{id}": {
        "get": {
          "operationId": "PropertyTypesController_getById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/{propertyTypeId}": {
        "put": {
          "operationId": "PropertyTypesController_update",
          "parameters": [
            {
              "name": "propertyTypeId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdatePropertyTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        },
        "delete": {
          "operationId": "PropertyTypesController_delete",
          "parameters": [
            {
              "name": "propertyTypeId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/{id}/addProductParameters": {
        "post": {
          "operationId": "PropertyTypesController_addProductParametersToProperty",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddProductParametersToPropertyTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/propertyTypes/{id}/addDealType": {
        "post": {
          "operationId": "PropertyTypesController_addDealType",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddDealTypeToPropertyTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "PropertyTypes"
          ]
        }
      },
      "/api/v1/regions": {
        "get": {
          "operationId": "RegionsController_getAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        },
        "post": {
          "operationId": "RegionsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateRegionsDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        }
      },
      "/api/v1/regions/admin": {
        "get": {
          "operationId": "RegionsController_getRegionsAdmin",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        }
      },
      "/api/v1/regions/autocomplete": {
        "get": {
          "operationId": "RegionsController_getRegionsAutocomplete",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        }
      },
      "/api/v1/regions/admin/{id}": {
        "get": {
          "operationId": "RegionsController_getById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        }
      },
      "/api/v1/regions/{id}": {
        "put": {
          "operationId": "RegionsController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateRegionsDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        },
        "delete": {
          "operationId": "RegionsController_deleteRegion",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Regions"
          ]
        }
      },
      "/api/v1/cities": {
        "get": {
          "operationId": "CitiesController_getAllCities",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Cities"
          ]
        },
        "post": {
          "operationId": "CitiesController_createCity",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateCityDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Cities"
          ]
        }
      },
      "/api/v1/cities/autocomplete": {
        "get": {
          "operationId": "CitiesController_getCitiesAutocomplete",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Cities"
          ]
        }
      },
      "/api/v1/cities/{cityId}": {
        "get": {
          "operationId": "CitiesController_getById",
          "parameters": [
            {
              "name": "cityId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Cities"
          ]
        },
        "put": {
          "operationId": "CitiesController_updateCity",
          "parameters": [
            {
              "name": "cityId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateCityDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Cities"
          ]
        },
        "delete": {
          "operationId": "CitiesController_deleteCity",
          "parameters": [
            {
              "name": "cityId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Cities"
          ]
        }
      },
      "/api/v1/cityAreas": {
        "get": {
          "operationId": "CityAreasController_getAllCityAreas",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "example": 1,
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "example": 10,
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CityAreas"
          ]
        },
        "post": {
          "operationId": "CityAreasController_createCityArea",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateCityDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CityAreas"
          ]
        }
      },
      "/api/v1/cityAreas/autocomplete": {
        "get": {
          "operationId": "CityAreasController_getCityAreasAutocomplete",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CityAreas"
          ]
        }
      },
      "/api/v1/cityAreas/{id}": {
        "get": {
          "operationId": "CityAreasController_getById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CityAreas"
          ]
        },
        "put": {
          "operationId": "CityAreasController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateCityDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CityAreas"
          ]
        },
        "delete": {
          "operationId": "CityAreasController_deleteRegion",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CityAreas"
          ]
        }
      },
      "/api/v1/agencyType": {
        "get": {
          "operationId": "AgencyTypeController_getAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "AgencyType"
          ]
        },
        "post": {
          "operationId": "AgencyTypeController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateAgencyTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "AgencyType"
          ]
        }
      },
      "/api/v1/agency": {
        "get": {
          "operationId": "AgencyController_getAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Agency"
          ]
        },
        "post": {
          "operationId": "AgencyController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateAgencyDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Agency"
          ]
        }
      },
      "/api/v1/agency/my": {
        "get": {
          "operationId": "AgencyController_getMy",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Agency"
          ]
        }
      }
    },
    "info": {
      "title": "Real Estate V1",
      "description": "Real Estate Web Service API - Version 1",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        }
      },
      "schemas": {
        "SignUpDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "example": "qwerty@gmail.com"
            },
            "password": {
              "type": "string",
              "example": "qwerty123"
            },
            "name": {
              "type": "string",
              "example": "James"
            },
            "phone": {
              "type": "string",
              "example": "+9045435345345"
            }
          },
          "required": [
            "email",
            "password",
            "name",
            "phone"
          ]
        },
        "UserEntity": {
          "type": "object",
          "properties": {}
        },
        "SignInDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "example": "qwerty@gmail.com"
            },
            "password": {
              "type": "string",
              "example": "qwerty123"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "ForgotPasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "example": "qwerty@gmail.com"
            },
            "url": {
              "type": "string",
              "example": "example.com"
            }
          },
          "required": [
            "email",
            "url"
          ]
        },
        "ResetPasswordDto": {
          "type": "object",
          "properties": {
            "password": {
              "type": "string",
              "example": "qwerty123"
            },
            "token": {
              "type": "string",
              "example": "gfhvbjknlkmnkhbjgvhjb"
            }
          },
          "required": [
            "password",
            "token"
          ]
        },
        "CheckVerificationCodeDto": {
          "type": "object",
          "properties": {
            "code": {
              "type": "string",
              "example": "123456"
            }
          },
          "required": [
            "code"
          ]
        },
        "GetProductsCharactersFilterDto": {
          "type": "object",
          "properties": {
            "roomsQuantity": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "rentalType": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "floor": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "constructionYear": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "bedsQuantity": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "studio": {
              "type": "boolean",
              "example": true
            },
            "inNewBuilding": {
              "type": "boolean",
              "example": true
            },
            "bathroom": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "balcony": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "propertyCondition": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "ceilingHeight": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "levelsNumber": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "repair": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "wallMaterial": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "storeysNumber": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "homeInfrastructure": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "inBathroom": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "inKitchen": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "lifeArrangement": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "GetProductsFilterDto": {
          "type": "object",
          "properties": {
            "dealType": {
              "type": "string",
              "example": "id"
            },
            "propertyType": {
              "type": "string",
              "example": "id"
            },
            "region": {
              "type": "string",
              "example": "id"
            },
            "city": {
              "type": "string",
              "example": "id"
            },
            "cityArea": {
              "example": [
                "id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "productCharacters": {
              "$ref": "#/components/schemas/GetProductsCharactersFilterDto"
            }
          },
          "required": [
            "dealType",
            "propertyType",
            "productCharacters"
          ]
        },
        "CreateProductCharacterDto": {
          "type": "object",
          "properties": {
            "roomsQuantity": {
              "type": "string",
              "example": "_id"
            },
            "rentalType": {
              "type": "string",
              "example": "_id"
            },
            "floor": {
              "type": "string",
              "example": "_id"
            },
            "constructionYear": {
              "type": "string",
              "example": "_id"
            },
            "bedsQuantity": {
              "type": "string",
              "example": "_id"
            },
            "totalArea_sq_m": {
              "type": "number",
              "example": "200"
            },
            "studio": {
              "type": "boolean",
              "example": true
            },
            "inNewBuilding": {
              "type": "boolean",
              "example": true
            },
            "bathroom": {
              "type": "string",
              "example": "_id"
            },
            "balcony": {
              "type": "string",
              "example": "_id"
            },
            "propertyCondition": {
              "type": "string",
              "example": "_id"
            },
            "ceilingHeight": {
              "type": "string",
              "example": "_id"
            },
            "levelsNumber": {
              "type": "string",
              "example": "_id"
            },
            "repair": {
              "type": "string",
              "example": "_id"
            },
            "wallMaterial": {
              "type": "string",
              "example": "_id"
            },
            "storeysNumber": {
              "type": "string",
              "example": "_id"
            },
            "homeInfrastructure": {
              "example": "array of _id",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "inBathroom": {
              "example": "array of _id",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "inKitchen": {
              "example": "array of _id",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "lifeArrangement": {
              "example": "array of _id",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "roomsQuantity",
            "rentalType",
            "floor",
            "constructionYear",
            "bedsQuantity",
            "totalArea_sq_m",
            "studio",
            "inNewBuilding",
            "bathroom",
            "balcony",
            "propertyCondition",
            "ceilingHeight",
            "levelsNumber",
            "repair",
            "wallMaterial",
            "storeysNumber",
            "homeInfrastructure",
            "inBathroom",
            "inKitchen",
            "lifeArrangement"
          ]
        },
        "CreateProductDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "duplex apartment"
            },
            "description": {
              "type": "string",
              "example": "some description"
            },
            "address": {
              "type": "string",
              "example": "Ashgabat, Swoboda koche 28"
            },
            "price": {
              "type": "number",
              "example": 1200
            },
            "dealType": {
              "type": "string",
              "example": "id"
            },
            "propertyType": {
              "type": "string",
              "example": "id"
            },
            "region": {
              "type": "string",
              "example": "id"
            },
            "city": {
              "type": "string",
              "example": "id"
            },
            "cityArea": {
              "type": "string",
              "example": "id"
            },
            "productCharacters": {
              "$ref": "#/components/schemas/CreateProductCharacterDto"
            }
          },
          "required": [
            "name",
            "description",
            "address",
            "price",
            "dealType",
            "propertyType",
            "region",
            "city",
            "cityArea",
            "productCharacters"
          ]
        },
        "UpdateProductStatusDto": {
          "type": "object",
          "properties": {
            "status": {
              "type": "string",
              "example": "active"
            }
          },
          "required": [
            "status"
          ]
        },
        "ProductParametersItemDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string"
            },
            "titleRu": {
              "type": "string"
            },
            "titleTm": {
              "type": "string"
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm"
          ]
        },
        "CreateProductParameterDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string"
            },
            "titleRu": {
              "type": "string"
            },
            "titleTm": {
              "type": "string"
            },
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ProductParametersItemDto"
              }
            },
            "selectType": {
              "type": "string",
              "example": "Single"
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm",
            "items",
            "selectType"
          ]
        },
        "AddParameterItemsDto": {
          "type": "object",
          "properties": {
            "items": {
              "example": [
                "items _id"
              ],
              "type": "array",
              "items": {
                "type": "array"
              }
            }
          },
          "required": [
            "items"
          ]
        },
        "AddPropertyTypesDto": {
          "type": "object",
          "properties": {
            "propertyTypes": {
              "example": [
                "propertyType _id"
              ],
              "type": "array",
              "items": {
                "type": "array"
              }
            }
          },
          "required": [
            "propertyTypes"
          ]
        },
        "AddDealTypesDto": {
          "type": "object",
          "properties": {
            "dealTypes": {
              "example": [
                "dealType _id"
              ],
              "type": "array",
              "items": {
                "type": "array"
              }
            }
          },
          "required": [
            "dealTypes"
          ]
        },
        "CreateDealTypeDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "sale"
            },
            "titleRu": {
              "type": "string",
              "example": "продажа"
            },
            "titleTm": {
              "type": "string",
              "example": "satlyk"
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm"
          ]
        },
        "CreatePropertyTypeDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "apartments"
            },
            "titleRu": {
              "type": "string",
              "example": "квартиры"
            },
            "titleTm": {
              "type": "string",
              "example": "kwartira"
            },
            "dealTypes": {
              "example": [
                "_id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm",
            "dealTypes"
          ]
        },
        "UpdatePropertyTypeDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "apartments"
            },
            "titleRu": {
              "type": "string",
              "example": "квартиры"
            },
            "titleTm": {
              "type": "string",
              "example": "kwartira"
            },
            "dealTypes": {
              "example": [
                "_id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm",
            "dealTypes"
          ]
        },
        "AddProductParametersToPropertyTypeDto": {
          "type": "object",
          "properties": {
            "productParameterIds": {
              "example": [
                "productParameter _id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "productParameterIds"
          ]
        },
        "AddDealTypeToPropertyTypeDto": {
          "type": "object",
          "properties": {
            "dealTypeId": {
              "type": "string",
              "example": "dealType _id"
            }
          },
          "required": [
            "dealTypeId"
          ]
        },
        "CreateRegionsDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "Mary"
            },
            "titleRu": {
              "type": "string",
              "example": "Мары"
            },
            "titleTm": {
              "type": "string",
              "example": "Mary"
            },
            "cities": {
              "example": [
                "_id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm",
            "cities"
          ]
        },
        "UpdateRegionsDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "Mary"
            },
            "titleRu": {
              "type": "string",
              "example": "Мары"
            },
            "titleTm": {
              "type": "string",
              "example": "Mary"
            },
            "cities": {
              "example": [
                "_id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm",
            "cities"
          ]
        },
        "CreateCityDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "Mary"
            },
            "titleRu": {
              "type": "string",
              "example": "Mary"
            },
            "titleTm": {
              "type": "string",
              "example": "Mary"
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm"
          ]
        },
        "UpdateCityDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "Mary"
            },
            "titleRu": {
              "type": "string",
              "example": "Мары"
            },
            "titleTm": {
              "type": "string",
              "example": "Mary"
            },
            "cityAreas": {
              "example": [
                "_id"
              ],
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm",
            "cityAreas"
          ]
        },
        "CreateAgencyTypeDto": {
          "type": "object",
          "properties": {
            "titleEn": {
              "type": "string",
              "example": "sale"
            },
            "titleRu": {
              "type": "string",
              "example": "продажа"
            },
            "titleTm": {
              "type": "string",
              "example": "satlyk"
            }
          },
          "required": [
            "titleEn",
            "titleRu",
            "titleTm"
          ]
        },
        "CreateAgencyDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "Real Estate"
            },
            "idCode": {
              "type": "number",
              "example": 12345678
            },
            "agencyType": {
              "type": "string",
              "example": "mongo _id"
            },
            "region": {
              "type": "string",
              "example": "mongo _id"
            },
            "city": {
              "type": "string",
              "example": "mongo _id"
            },
            "cityArea": {
              "type": "string",
              "example": "mongo _id"
            },
            "creator": {
              "type": "string",
              "example": "mongo _id"
            },
            "website": {
              "type": "string",
              "example": "website.com"
            },
            "email": {
              "type": "string",
              "example": "test@gmail.com"
            }
          },
          "required": [
            "name",
            "idCode",
            "agencyType",
            "region",
            "city",
            "cityArea",
            "creator",
            "website",
            "email"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
