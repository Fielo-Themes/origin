var Visualforce = function() {
  var results = {};
  var evento = {
    status: 200
  };

  function setResults(r) {
    results = r;
  }
  return {
    remoting: {
      Manager: {
        setResultLogin: function(username, password) {
          if (username === 'user@fielo.com' && password === 'fielo123') {
            setResults({
              "messages": [{
                "severity": "confirm",
                "summary": "acceso correcto"
              }],
              "redirectURL": "#"
            });
          } else {
            setResults({
              "messages": [{
                "severity": "error",
                "summary": "acceso denegado"
              }]
            });
          }
        },
        setResultForgotPassword: function(username) {
          setResults({});
        },
        setResultRemoteAction: function(sobject) {
          setResults({
            "messages": [{
              "componentId": "Birth Date",
              "detail": "Fecha Invalida",
              "severity": "ERROR",
              "summary": "Fecha Invalida"
            }, {
              "componentId": "First Name",
              "detail": "",
              "severity": "ERROR",
              "summary": "Nombre Invalid"
            }]
          });
        },
        setResultNextPage: function(componentId, pageNumber, orderBy, filters) {
          filters = JSON.parse(filters);
          if((typeof filters.Category__c != 'undefined' && filters.Category__c != '') || (typeof filters.Tag__c !='undefined' && filters.Tag__c !='')){
            if(filters.Category__c == 'a05o000000Mlb0nAAB') {
              setResults(
                [
                {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVEWAA4&oid=00Do0000000d667EAA",
                  "Name": "Borrar",
                  "PointsCant__c": 3,
                  "Id": "a0co00000099PYG",
                  "ExpirationDate__c": "Thu Nov 23 10:25:00 GMT 2017"
                },
                 {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVEbAAO&oid=00Do0000000d667EAA",
                  "Name": "Borrar",
                  "PointsCant__c": 2,
                  "Id": "a0co00000099PXm",
                  "ExpirationDate__c": "Thu Nov 23 04:03:00 GMT 2016"
                },
                 {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVCBAA4&oid=00Do0000000d667EAA",
                  "Name": "Borrar",
                  "PointsCant__c": 1,
                  "Id": "a0co00000099PMCAA2",
                  "ExpirationDate__c": "Thu Nov 23 18:00:00 GMT 2015"
                },
                 {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVEHAA4&oid=00Do0000000d667EAA",
                  "Name": "Borrar",
                  "PointsCant__c": 7,
                  "Id": "a0co00000099PYu",
                  "ExpirationDate__c": "Thu Nov 23 23:30:00 GMT 2014"
                }
                ]
              );
            }
            if(filters.Category__c == 'a05o0000008YfXNAA0') {
              setResults(
                [
                {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVBXAA4&oid=00Do0000000d667EAA",
                  "Name": "IT",
                  "PointsCant__c": 5,
                  "Id": "a0co00000099PYVAA2",
                  "ExpirationDate__c": "Thu Nov 23 04:03:00 GMT 2016"
                },
                 {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVBwAAO&oid=00Do0000000d667EAA",
                  "Name": "IT",
                  "PointsCant__c": 8,
                  "Id": "a0co00000099PYzAAM",
                  "ExpirationDate__c": "Thu Nov 23 10:25:00 GMT 2017"
                },
                 {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVC1AAO&oid=00Do0000000d667EAA",
                  "Name": "IT",
                  "PointsCant__c": 100,
                  "Id": "a0co00000099PUTAA2",
                  "ExpirationDate__c": "Thu Nov 23 23:30:00 GMT 2014"
                },
                 {
                  "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o00000011OXqAAM&oid=00Do0000000d667",
                  "Name": "IT",
                  "PointsCant__c": 100,
                  "Id": "a0co0000002NK80",
                  "ExpirationDate__c": "Thu Nov 23 18:00:00 GMT 2015"
                },
                ]
              );
            }
          } else {
            switch (pageNumber) {
              case 1:
                setResults(
                  [
                  {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVEWAA4&oid=00Do0000000d667EAA",
                    "Name": "Croki a mano alzada",
                    "PointsCant__c": 3,
                    "Id": "a0co00000099PYG",
                    "ExpirationDate__c": "Thu Nov 23 11:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVEbAAO&oid=00Do0000000d667EAA",
                    "Name": "El auto de Fielo",
                    "PointsCant__c": 2,
                    "Id": "a0co00000099PXm",
                    "ExpirationDate__c": "Thu Nov 23 12:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVCBAA4&oid=00Do0000000d667EAA",
                    "Name": "Madera 3",
                    "PointsCant__c": 1,
                    "Id": "a0co00000099PMCAA2",
                    "ExpirationDate__c": "Thu Nov 23 13:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVEHAA4&oid=00Do0000000d667EAA",
                    "Name": "Poster de Poker",
                    "PointsCant__c": 7,
                    "Id": "a0co00000099PYu",
                    "ExpirationDate__c": "Thu Nov 23 14:25:00 GMT 2017"
                  }
                  ]
                );
                break;
              case 2:
                setResults(
                  [
                  {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVBXAA4&oid=00Do0000000d667EAA",
                    "Name": "set de pinüinos",
                    "PointsCant__c": 5,
                    "Id": "a0co00000099PYVAA2",
                    "ExpirationDate__c": "Thu Nov 23 15:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVBwAAO&oid=00Do0000000d667EAA",
                    "Name": "Puma custodio",
                    "PointsCant__c": 8,
                    "Id": "a0co00000099PYzAAM",
                    "ExpirationDate__c": "Thu Nov 23 16:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVC1AAO&oid=00Do0000000d667EAA",
                    "Name": "Raqueta de tenis",
                    "PointsCant__c": 100,
                    "Id": "a0co00000099PUTAA2",
                    "ExpirationDate__c": "Thu Nov 23 17:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o00000011OXqAAM&oid=00Do0000000d667",
                    "Name": "iPhone",
                    "PointsCant__c": 100,
                    "Id": "a0co0000002NK80",
                    "ExpirationDate__c": "Thu Nov 23 18:25:00 GMT 2017"
                  },
                  ]
                );
                break;
                case 3:
                setResults(
                  [
                  {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVBXAA4&oid=00Do0000000d667EAA",
                    "Name": "set de pinüinos",
                    "PointsCant__c": 5,
                    "Id": "a0co00000099PYVAA2",
                    "ExpirationDate__c": "Thu Nov 23 10:25:00 GMT 2017"
                  },
                   {
                    "AttachmentId__c": "//c.na17.content.force.com/servlet/servlet.ImageServer?id=015o0000001SVBwAAO&oid=00Do0000000d667EAA",
                    "Name": "Puma custodio",
                    "PointsCant__c": 8,
                    "Id": "a0co00000099PYzAAM",
                    "ExpirationDate__c": "Thu Nov 23 10:25:00 GMT 2017"
                  },
                  ]
                );
                break;
              default:
                setResults(
                  []
                );
                break;
              }
          }
        },
        addToCart: function(recordId,quant,closeOrder,detailUrl,quantInCart) {
          // Open
          setResults({
            messages: [{
              detail: "Reward added successfully",
              severity: "INFO",
              summary: "Reward added successfully"
            }],
            refresh: [{name: "quantInCart", value: "2"}]
          });

          /*
          // Pending
          setResults({
            "messages": [{
              "severity": "info",
              "summary": "Label.InfoRedemptionApproval"
            }],
            "refresh": [{
              'quantInCart': '0',
              'quantity': '1'
            }]
          });

          // Close
          setResults({
            "redirectURL": '/Page?pageId=12323123&binding=redemptionId1321321312'
          });
          */
        },

        invokeAction: function() {
          var method = this.invokeAction.arguments[0];
          var callback = this.invokeAction.arguments[this.invokeAction.arguments.length - 2];
          var options = this.invokeAction.arguments[this.invokeAction.arguments.length - 1];
          switch (method) {
            case 'SiteLoginFieloController.login':
              var username = this.invokeAction.arguments[1];
              var password = this.invokeAction.arguments[2];
              this.setResultLogin(username, password);
              break;
            case 'SiteLoginFieloController.forgotPassword':
              var username = this.invokeAction.arguments[1];
              this.setResultLogin(username);
              break;
            case 'PageController.remoteAction':
              var componentId = this.invokeAction.arguments[1];
              var sobject = this.invokeAction.arguments[2];
              var additionals = this.invokeAction.arguments[3];
              this.setResultRemoteAction(componentId, sobject, additionals);
              break;
            case 'PageController.getRecords':
              var componentId = this.invokeAction.arguments[1];
              var pageNumber = this.invokeAction.arguments[2];
              var orderBy = this.invokeAction.arguments[3];
              var filters = this.invokeAction.arguments[4];
              this.setResultNextPage(componentId, pageNumber, orderBy, filters);
              break;
            case 'FieloCMS_EE.AddToCartController.addToCart':
              var recordId = this.invokeAction.arguments[1];
              var quant = this.invokeAction.arguments[2];
              var closeOrder = this.invokeAction.arguments[3];
              var detailUrl = this.invokeAction.arguments[4];
              var quantInCart = this.invokeAction.arguments[5];

              this.addToCart(recordId,quant,closeOrder,detailUrl,quantInCart);
              break;
            default:
              throw ('Accion desconocida');
              break
          }
          callback(results, evento);
        }
      }
    }
  }
}();
