import axios from 'axios';

const token = '';

/* 
    Example of return:
    {
        "_id":"5d5d9388ef0508002344be14",
        "name":"Otacilio Maia",
        "email":"otacilio.n97@gmail.com",
        "roles":["admin","guardian","professor","student"],
        "permissions":[
            "admin","guardian","professor",
            "student","feed:read","sync:manage",
            "agenda:admin","post:manage","ticket:manage",
            "report:manage","group:manage","member:manage",
            "user:manage","export:manage","payments:admin",
            "statistics:read","student:read","pendency:read",
            "ticket:request","preference:read","agenda:read",
            "group:read","post:write","pendency:write",
            "report:read","post:approve","ticket:agent",
            "report:write","enrollment:manage","tag:manage",
            "group:write","member:write","member:read",
            "user:read","user:write","export:write","payments:item",
            "payments:sale","payments:channel","payments:customer",
            "enrollment:read","group:read:scoped","tag:read",
            "post:autoapprove","tag:write","enrollment:write",
            "group:write:scoped","enrollment:read:scoped",
            "tag:read:scoped","tag:write:scoped","enrollment:write:scoped"],
        "accounts":[
            {"_id":"5d5d9388ef0508002344be14","permissions":[
                "admin","guardian","professor",
                "student","feed:read","sync:manage",
                "agenda:admin","post:manage","ticket:manage",
                "report:manage","group:manage","member:manage",
                "user:manage","export:manage","payments:admin",
                "statistics:read","student:read","pendency:read",
                "ticket:request","preference:read","agenda:read",
                "group:read","post:write","pendency:write",
                "report:read","post:approve","ticket:agent",
                "report:write","enrollment:manage","tag:manage",
                "group:write","member:write","member:read",
                "user:read","user:write","export:write",
                "payments:item","payments:sale","payments:channel",
                "payments:customer","enrollment:read","group:read:scoped",
                "tag:read","post:autoapprove","tag:write",
                "enrollment:write","group:write:scoped","enrollment:read:scoped",
                "tag:read:scoped","tag:write:scoped","enrollment:write:scoped"]},
        "current":true,
        "name":"Otacilio Maia",
        "email":"otacilio.n97@gmail.com",
        "status":"ACTIVE",
        "community":{
            "community":"demo-escola",
            "name":"Colégio Walter White",
            "iconURL":"https://cdn.edu.tenda.digital/admin/uploads/b232f840-61a5-4322-9a71-933553b329a1/School_logo.png",
            "icon":"https://cdn.edu.tenda.digital/admin/uploads/b232f840-61a5-4322-9a71-933553b329a1/School_logo.png","
            uploads_androidIcon":"https://cdn.edu.tenda.digital/admin/uploads/e38fc6cb-4991-41cd-8e59-29154315f41d/School_logo.png","web":{"link":"https://demo-escola.edu.tenda.digital"}}}],
        "members":[],
        "groups":[
            {"_id":"5cd9ea7fcc686300233277ef","name":"1°  Ano B","type":"group","season":"2019"},
            {"_id":"5cd9ea7fcc686300233277f1","name":"2°  Ano B","type":"group","season":"2019"},
            {"_id":"5cd9ea7fcc686300233277f0","name":"3°  Ano A","type":"group","season":"2019"},
            {"_id":"5cd9ea7fcc686300233277ee","name":"1°  Ano A","type":"group","season":"2019"}],
        "modules":{
            "core":{"module":"core"},
            "payments":{
                "module":"payments","itemKinds":{
                    "product":true,"recurrence":true}},
            "communication":{"module":"communication"},
        }
    }
*/

export const getSelfUser = () => {
  return axios.get('https://api.edu.tenda.digital/v1/user/me?_community=demo-escola', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};
