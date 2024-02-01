# Guidelines for writing procedures

These guidelines are not an exhaustive list but we've done our best to cover the basics

## Rule 0 -- There is no 0 (zero)

All numbered sequences start with 1 (one) when writing procedures and processes.

The interpretation of “0” as the starting point in a sequence relies on technical knowledge we can’t guarantee in end users.

If you have prerequisites or requirements, put them under the **Before you begin** heading, especially if they're already documented elsewhere.

## Rule 1 -- Separate explanations from procedural instructions

Never put explanations and instructions in a single paragraph. When you do this you force your audience to read the whole thing in order to determine what they need to do next.

**ALWAYS** explain **THEN** instruct.

### Example of mixed explanation and procedural content

>## Configure FeatureBase Service Unit
>On Linux, we recommend running FeatureBase as a systemd service unit. To learn more about systemd and units, go [here](#). To configure the FeatureBase service unit’s function, we’ll create a .service file.

Can be rewritten as:

>## How do I configure the FeatureBase Service Unit?
>
>We recommend running FeatureBase as a systemd service unit.
>
>## Before you begin
>
>* [Learn about systemd and units](https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files)
>
>## Step one: configure the FeatureBase Service Unit
>
>Create a ``.service` file using the following commands:
>...etc

## Rule 2 -- all procedures are a **perfect path**

It's impossible to write an application to cover every single edge case. The same applies to writing procedures.

* **Always** start with a procedure that covers the **perfect path** to perform a task
* Write edge cases as **separate** procedures because as the name implies, they're not going to be experienced by every single user.

**NOTE** when there's duplicated steps, [try using Jekyll include files to reuse content](/help-on-help/writing-help/writing-common-include)

## Rule 3 -- Use headings to break steps into logical groupings

Sometimes it's necessary to provide an explanation for one or more steps.

It's clearer for the user to give a heading break **before** the explanation than jamming a paragraph in the middle of a series of steps

### Example of explanation and steps getting messy

>Execute the following in a terminal to run FeatureBase with the default configuration (FeatureBase will be available at [localhost:10101](http://localhost:10101)). The `--handler.allowed-origins` argument enables you to query FeatureBase from the [web-UI](/docs/community/com-api/old-web-ui) via the given port and address.
>From there, start the [web UI](/docs/community/com-api/old-web-ui). It will indicate whether FeatureBase is running successfully on the homepage.  
If you prefer using the CLI, you can connect to and query FeatureBase using `psql`
>```shell
>psql -h localhost -p 55432
>```

Can be rewritten as:

># Run FeatureBase
>
>You can run FeatureBase with the standard configuration or one which will allow you to use the Web UI to query FeatureBase tables
>
>## Step one - Open a CLI and the FeatureBase install directory
>
>**NOTE** you can add the FeatureBase /opt directory to your `path` variable to run the application from any CLI directory.
>
>* Open a CLI and CD to your FeatureBase install directory
>* CD to the `/opt` directory
>
>## Step two - choose start-up configuration
>
>```
>COMMAND SYNTAX HERE (which wasn't provided in original docs)
>```
>Where:
>* Arg 1 - description
>* Arg 2 - description
>
>## Step three - Connect to the FeatureBase UI
>
>Connect to the Web UI at `localhost:10101`
>```
