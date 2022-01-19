   # Docker Image Push to Azure Registry
   # Docker run with ACI from ACR
   
   az ad sp create-for-rbac --name "myApp" --role contributor \
                            --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \
                            --sdk-auth
