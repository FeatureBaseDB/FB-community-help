# FAQ on Before you begin

## Questions

* What's "Before you begin" for?
* Why do I need to list stuff under a "Before you begin"?
* Why do we need to state the obvious?
* What goes under "Before you begin?
* What can I leave out of "Before you begin"?
* Are third party applications and systems out-of-scope?

## Answers

### What's "Before you begin" for? / Why list stuff under here?

**Before you begin** gives the user **a list** of things they need to:
* be aware of (e.g., Admin users can perform steps)
* need to have in place (e.g., Docker running)
* need to have setup/performed (e.g., added a database)

The list of items serves to:
* inform the user about what's required **before** they continue
* provide guidance on prerequisites which **will** prevent successful understanding/execution of the content that follows
* list all systems and their states that will allow FeatureBase to function as expected when steps are performed
* act as a first port-of-call for troubleshooting if something **does** go wrong

### Why do we need to state the obvious?

What's obvious to **you** may not be obvious to our **customers**.

We can assume the following of our customers:
* know how to do **their** jobs
* have expertise in **their** systems
* have **zero** to **none** experience with FeatureBase

Furthermore users are **unlikely** to have their systems setup like a FeatureBase developer on which the system and requirements are **already installed**.

## What goes under **Before you begin**? / What can I leave out? / Should I document Third-party systems?

Some examples:

* You can't create a Table without a Database
* You can't query data if you haven't ingested anything
* You can't run FeatureBase commands in a Terminal unless you've added `/featurebase` to the PATH variable OR are in the correct directory
* You can't install FeatureBase in Docker without first installing and running Docker
* You can't run `curl`, `wget` or `make` commands if they're not installed

As mentioned earlier, **you** might think these are obvious, but you're **not the customer**.

## What doesn't belong in Before you begin?

| Doesn't belong | Example | What to do instead |
|---|---|
| Multi-step instructions | You must first install Python on your system and configure it as follows:<br/>* configuration 1<br/>* configuration 2 | Create a separate configuration page and hyperlink as follows: [Learn how to configure Python for this feature](#) |
| Multi-sentence explanations | Choose an appropriate unique key from your source data which can be ingested as the FeatureBase table _id column. The _id column is required in all FeatureBase tables and cannot be deleted. | If there's an explanation required, it goes in the page summary, above **Before you begin**, and/or as a text callout. You can also hyperlink out to a page that contains further information because in situations like this, you're most likely duplicating information that already exists and has already gone through a review process |
| Multiple nested bullet levels | * Create a FeatureBase database</br>  * Create a table<br/>  * Learn about data types<br/>    * Vector data type<br/>      * Cosine distance function | **Further information** is used for links that relate to the page content but which are **NOT** required to make things work |


## Should I document third-party systems?

In brief: **NO**

* We **do not** document third party systems because it's not our responsibility and we've got enough to do as it is
* We **DO** hyperlink to information to help our users install/configure/setup the third-party system so that **FeatureBase will work as expected**.
* We **DO** inform users what they need to do with a third-party system in order that **FeatureBase will work as expected**.

Why do we do these things?
* So users have no surprises when running through our documentation and FeatureBase
* So users have a single point where they can find the things they need to make FeatureBase work for them
* So FeatureBase support is not forced to repeat information to different users so those users can perform tasks in FeatureBase

Or to put it bluntly: FeatureBase is a brand new product and **anything** that makes a customer's life easier is a **benefit** to them and to us.
