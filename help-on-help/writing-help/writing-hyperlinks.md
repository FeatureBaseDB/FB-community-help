# Writing hyperlinks

## Hyperlink styles

Hyperlink colours (including those in navigation bars) are governed by the `$link-color` setting in `featurebase.scss`.

## Internal or external hyperlinks

| Type of link | Structure | Example |
|---|---|---|
| Internal | `[meaningful-anchor-text](/docs/folder/filename)` | `[Learn how to create tables in FeatureBase cloud](/docs/cloud/cloud-tables/cloud-table-create)` |
| External | `[meaningful-anchor-text](https://url){:target="_blank"}` | [Visit the FeatureBase website](https://featurebase.com) |

## Rule 1 - write meaningful anchor text

Writing meaningful anchor text for a hyperlink:
* helps give context to what's on the other end of the link
* makes hyperlinks more visible and clearer in text
* are more likely to be indexed because they'll invariably feature a keyword

## Rule 2 - Single word anchor text is useless

Single word anchor text is sub-optimal, especially if you use the same word over and over again.

| Example | Problem | Solution |
|---|---|---|
| "...once you've created a database you should create your tables and you can learn how to do that [here](#). Once you've done that you can begin ingesting data..." | It's harder to see a single hyperlink in a block of text, which means users will miss them. | **Next step**<br/>Now your database has been created, add tables.<br/>* [Learn how to manage and create tables](#) |

### Other issues with single-word hyperlinks

* No-one searches on a single word unless it's a recognised keyword (which itself can be > 1 word), therefore `click [here](#)` is useless.
* Single words won't be indexed in search so that again makes information harder to find.
* They're not accessible for screen readers or people with sight impairment.

## Rule 3 - Never place hyperlinks in the middle of sentences

Hyperlinks in sentences don't help the user because they imply there's more detailed information found elsewhere.

This means the user is being bounced from one place to another without being able to read a clear, concise explanation.

Yes, there are undoubtedly many different related pages and lots of information available

But this information still needs to be presented in a logical order.

* Background information should be given **before** or **after** the explanation.
* Background information **required** to understand or perform a task belongs under the **Before you begin** heading
* Related information that can be read at any time belongs under the **Further information** heading

## Examples

### Single word hyperlinks

>Everything that can be done in the user interface can be accomplished via REST api calls. Furthermore, APIs allow you to perform additional actions as well as gather more metadata about your organization and data. You will likely interact with the APIs in a production setting. Full Documentation for the APIs can be found [here](/cloud/cloud-api).

Rewritten as:

>REST API calls will tend to be used in production environments:
>* instead of the FeatureBase user interface
>* to gather more metadata about your organization and data
>
>## Further information
>
>* [Full API documentation](/cloud/cloud-api)

### Grafana

> For the best experience, [install](https://grafana.com/grafana/download) Grafana version 7 using the binary, not brew. The plugin requires version 7 or greater, but version 7 works best. For convenience, here are the commands for mac. For other platforms, check the link. | >## Before you begin<br/>

Rewritten content:

>## Before you begin
>* [Install Grafana version 7](https://grafana.com/grafana/download) using the installer binary **not** brew

### Example 2 -- transforming CSV files

> The first step is to transform every row in the CSV file into the FeatureBase Cloud schema syntax, which can be seen in further detail at [here](/cloud/cloud-data-ingestion/streaming-https-endpoint/cloud-streaming-overview). The output of this function will create 1 to many properly formatted JSON files for every 1000 records in your CSV file.

Rewritten content

>## Step one - transform rows to FeatureBase cloud schema syntax
>
> Every 1000 records in the CSV file are converted to formatted JSON files which conform to the FeatureBase Cloud Schema Syntax.
>
>* [Example of CSV conversion](/cloud/cloud-data-ingestion/streaming-https-endpoint/cloud-streaming-overview)

## Further information

* [W3Schools page on accessible anchor text](https://www.w3schools.com/accessibility/accessibility_link_text.php)
* [W3Schools page on regional accessibility laws](https://www.w3.org/WAI/policies/united-states/)
* [CSUN best practices for accessible links with a video](https://www.csun.edu/universal-design-center/best-practices-accessible-links)
