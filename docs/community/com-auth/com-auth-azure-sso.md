---
title: Azure-AD setup
layout: default
parent: Community authentication
grand_parent: Community
---

# How do I configure FeatureBase as an Azure Active Directory IDP?
{: .no_toc }

Configure FeatureBase as an Azure Active Directory application Identity Provider (IdP)

{% include page-toc.md %}

## Before you begin

* Obtain administrator privileges to your Azure AD account
{% include /com-install/com-install-before-begin.md %}
* [Add authentication to `featurebase.conf`](/docs/community/com-auth/com-auth-tls)

## Step one: Register FeatureBase as an Azure application

The following values are used when registering FeatureBase as an Azure AD aplication:

| Step | What to add | Example |
|---|---|---|
| 4 | Redirect URL | The fully qualified domain or public IP address with `/redirect` as a suffix | `https://featurebase-hostname-or-ip:10101/redirect` |
| 6 | Microsoft Graph permissions | `Microsoft Graph : Delegated : GroupMember.ReadAll.`<br/> `Microsoft Graph : Delegated : User.Read.All.` |

* [Register FeatureBase as an Azure AD application](https://docs.microsoft.com/en-us/powerapps/developer/data-platform/walkthrough-register-app-azure-active-directory#create-an-application-registration){:target="_blank"}

## Step 2 - create an application secret key

* [Create an application secret key for FeatureBase](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#option-2-create-a-new-application-secret)

## Step 3 - Add the secret key to `featurebase.conf`

* CD to the `/featurebase/opt` directory.
* Edit `featurebase.conf` in a text editor.
* Edit `client-secret` value then add the Azure AD FeatureBase application secret.

## Step 4 - Create Azure groups

* [Complete steps 1-10 of Create Azure AD groups](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal#create-a-basic-group-and-add-members)

## Step 5 - Add users to Azure groups

* [Complete steps 11-12 of Add users to groups](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal#create-a-basic-group-and-add-members)

<!-- Should this be duplicated in the group permissions in FeatureBase?-->

## Step 6 - Set application authentication

Perform these steps in your Azure application settings.

* Open the Application configuration page.
* Click the Authentication tab > Advanced Settings
* Toggle **Allow public client flows** to **yes**

!["Image of AzureAD app configuration page with Allow public client flows toggled to yes."](/assets/images/com-config/public_client_flows.png)

## Next step

* [Set up FeatureBase authentication](/docs/community/com-auth/com-auth-tls)
