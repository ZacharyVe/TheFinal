## Question A (60% credit):

In CSS3, how would you select:

  - Every `<a>` element whose `href` attribute value begins with “https”.
  ###Answer
    a[href^="https"]
  - Every `<a>` element whose `href` attribute value ends with “.pdf”.
  ###Answer
    a[href$=".pdf"]
  - Every `<a>` element whose `href` attribute value contains the substring “css”.
  ###Answer
    a[href*="css"]

## Question B (40% credit):

What is the purpose of the z-index and how is it used? What possible values does the z-index take (e.g. one of those is "auto")?

  ###Answer
    The purpose of the Z-index is to determine which element is in front. Values can be auto, number, initial, inherit.