
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "Post-study survey",
showProgressBar: "bottom",
firstPageIsStarted: true,
startSurveyText: "Start Survey",
showQuestionNumbers: "on",
pages: [
    {
        "questions": [
            {
                "type": "html",
                "html": "Congratulations on completing the task! <br/>Let us know what you think by completing the survey.<br/>Please click on <b>'Start Survey'</b> button when you are ready."
            }
        ]
    }, 

    // {
    //     "questions": [
    //         {
    //             "type": "nouislider",
    //             "name": "range",
    //             "title": "I thought it was easy to complete the tasks."
    //         }
    //     ]

    //     },

    {
        "questions": [
            {
                "type": "matrix",
                "name": "easy to use",
                "title": "I thought it was easy to complete the tasks.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            }, 
          
            {
                "type": "matrix",
                "name": "enjoyment",
                "title": "I enjoyed completing the tasks.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            },
        ]
    }, 
    

    {
        "questions": [
            {
                "type": "matrix",
                "name": "info",
                "title": "I thought the amount of information displayed on screen was appropriate.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            }, 
          
            {
                "type": "matrix",
                "name": "lighting",
                "title": "The information was not legible due to ambient lighting conditions.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            },

            {
                "type": "matrix",
                "name": "glare",
                "title": "The information was not legible due to reflection/glare.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            },


            {
                "type": "matrix",
                "name": "consistency",
                "title": "I thought that the information displayed on screen was consistent.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            },

            {
                "type": "matrix",
                "name": "consistency",
                "title": "I thought the information was placed appropriately within the surrounding environment.",
                "columns": [
                    {
                        "value": 1,
                        "text": "Strongly Disagree"
                    }, {
                        "value": 2,
                        "text": "Disagree"
                    }, {
                        "value": 3,
                        "text": "Neutral"
                    }, {
                        "value": 4,
                        "text": "Agree"
                    }, {
                        "value": 5,
                        "text": "Strongly Agree"
                    }
                ],
            },
        ]
    }, 

]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (sender) {
    document
        .querySelector('#surveyResult')
        .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});

$("#surveyElement").Survey({model: survey});