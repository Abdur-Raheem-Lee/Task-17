
<!-- -------------------------GET REQUEST-------------------------- -->

To view all the information in Postman,

Select "GET" from the drop down list and where it says "Enter request URL" type the following:

http://localhost:8080/api

All the information inside the JSON file will be displayed at the bottom of the screen

<!-- --------------------------POST REQUEST------------------------- -->

To add a new object to the JSON file,

Select "POST" from the drop down list and where it says "Enter request URL" type the following:

http://localhost:8080/api/?title=Enter_the_title_here&des=Enter_a_description_of_your_project_here&URL=Enter_a_link_to_the_project_here

eg.: http://localhost:8080/api/?title=Hello world&des=I had to create a project which prints out the sentence "Hello World!"&URL=www.google.com

alternatively where it says "key" and "value" underneath the URL request you can do the following:

KEY                                     VALUE

title                                   Enter_the_title_here
desc                                    Enter_the_description_here
URL                                     Enter_the_URL_here

A message will be displayed at the bottom saying that the project was added to the JSON file

<!-- -------------------------DELETE REQUEST-------------------------- -->

To remove an object from the JSON file,

Select "DELETE" from the drop down list and where it says "Enter request URL" type the following:

http://localhost:8080/api/?id=Enter_the_id_of_the_project_here

eg.: http://localhost:8080/api/?id=5

alternatively where it says "key" and "value" underneath the URL request you can do the following:

KEY                                     VALUE

id                                      Enter_the_id_here

A message will be displayed at the bottom saying that the project was removed from the JSON file

<!-- -------------------------PUT REQUEST-------------------------- -->

To update the title/description of an existing object in the JSON file,

Select "PUT" from the drop down list and where it says "Enter request URL" type the following:

http://localhost:8080/api/?id=Enter_the_id_of_the_project_here&title=Enter_new_title_here

or

http://localhost:8080/api/?id=Enter_the_id_of_the_project_here&desc=Enter_new_description_here

alternatively where it says "key" and "value" underneath the URL request you can do the following:

KEY                                     VALUE

id                                      Enter_the_id_here
title                                   Enter_the_title_here

http://localhost:8080/api/?id=5&title=New Title

or

http://localhost:8080/api/?id=5&desc=New description

alternatively where it says "key" and "value" underneath the URL request you can do the following:

KEY                                     VALUE

id                                      Enter_the_id_here
desc                                    Enter_the_description_here

A message will be displayed at the bottom saying that the project was updated in the JSON file