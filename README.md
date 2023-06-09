# intel-oneAPI

#### Team Name - Team Oxygen
#### Problem Statement - Early Warning System for Student Dropouts
#### Team Leader Email - paulrohit2021@gmail.com

## A Brief of the Prototype:
  
  The idea is to develop an early warning system for student dropouts using Intel® AI Analytics Toolkits, its libraries, and SYCL/DPC++ Libraries. The system will use machine learning algorithms to identify students who are at risk of dropping out of 
school. The system will be scalable, cost friendly and innovative, and it will help improve student retention rates and promote equitable access to quality education. The COVID-19 pandemic has highlighted the need for such a system, as student dropouts 
have become a major challenge faced by the education sector which in turn results in various other problems like drug addiction , poverty and many more. By leveraging the power of Intel® AI Analytics Toolkits and its libraries, we can develop a 
solution that can help address this challenge and hopefully solve it for greater good.
  
## Tech Stack: 
   
### Model tracking and optimization:
MLflow,
Neptune.ai,
Wandb,
Comet.ml,
Tensorboarda,
Google Collab

### Modelserving and web app development:
One API,
Django,
FastAPI,
Streamlit,
AWS Lambda,
Flask,
   
## Step-by-Step Code Execution Instructions:
 
  ### intel
  *open index.html*

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
  
The process of working of this early student dropout detector is explained below step-by-step

Data Collection:
The first step in building a student dropout detector is collecting relevant data. This data may include student demographics, academic performance, attendance records, socio-economic factors, and other relevant information. Educational institutions can utilize their existing student information systems or surveys to gather this data.The data is collected via our website which take the input data or a csv dataset file.

Data Preprocessing:
Once the data is collected, it needs to be preprocessed to ensure its quality and compatibility with the machine learning algorithms. This step involves handling missing values, removing irrelevant features, and transforming categorical data into numerical representations for Attendance , GPA and CGPA. Data preprocessing techniques such as normalization and standardization may also be applied to ensure consistency.

Feature Selection:
To improve the accuracy of the dropout detector, it's important to identify the most relevant features that contribute to the prediction. Feature selection techniques, such as correlation analysis and feature importance analysis, can help in selecting the most influential features. This step aids in reducing dimensionality and enhancing the model's efficiency.

Model Selection:
Choosing an appropriate machine learning model is crucial for accurate prediction. Several models can be used for this task, including logistic regression, decision trees, random forests, or support vector machines. Each model has its strengths and weaknesses, so selecting the most suitable one depends on the characteristics of the dataset and the desired performance metrics.

Model Training and Evaluation:
Split the preprocessed data into training and testing sets. The training set is used to train the model on known data, while the testing set evaluates the model's performance on unseen data. The model is trained using the training set, and its performance is evaluated based on metrics such as accuracy, precision, recall, and F1-score. Cross-validation techniques can also be employed for more robust evaluation.

Fine-tuning and Hyperparameter Optimization:
To optimize the model's performance, hyperparameter tuning is essential. Hyperparameters are the configurations of the machine learning algorithm that are not learned from the data. Techniques like grid search or randomized search can be used to find the optimal combination of hyperparameters that yield the best results.

Prediction and Intervention:
Once the model is trained and fine-tuned, it can be used to predict student dropout based on new data. By monitoring student data in real-time, educational institutions can identify students at risk of dropping out and provide timely interventions. These interventions may include counseling, academic support programs, or personalized guidance to address the specific needs of each student.

Continuous Improvement:
Building an early student dropout detector is an iterative process. As new data becomes available and interventions are implemented, the model can be continuously retrained and refined to enhance its predictive capabilities. Regular evaluation and monitoring of the model's performance are crucial to ensure its effectiveness over time.
  
  
## What I Learned:
  From the project "Early Warning System for Student Dropouts using Intel® AI Analytics Toolkits," we have learned several valuable insights and lessons:

1. Importance of Data-Driven Approaches: The project highlighted the significance of leveraging data and analytics to identify early warning signs of student dropout. By harnessing the power of Intel® AI Analytics Toolkits, we can uncover patterns and indicators that might go unnoticed through traditional methods, enabling timely intervention and support.

2. Personalization Enhances Effectiveness: The project demonstrated the effectiveness of personalized interventions tailored to individual student needs. By utilizing the oneAPI framework, we can develop customized strategies and interventions that address specific challenges faced by at-risk students, increasing the chances of success and retention.

3. Collaboration and Integration Drive Efficiency: Seamless integration of Intel® AI Analytics Toolkits into existing educational systems fosters collaboration and enhances efficiency. The project highlighted the importance of interoperability and leveraging the oneAPI framework to streamline data processing, analysis, and reporting, ultimately improving the effectiveness of the Early Warning System.

4. Continuous Improvement and Adaptability: The project emphasized the value of continuous improvement and adaptability in tackling student dropout. By leveraging the flexibility of oneAPI, the system can evolve, incorporate new data sources, and refine models over time, ensuring that interventions remain relevant and effective.

5. Impact on Student Success: The project reaffirmed the positive impact of early identification and intervention in reducing student dropout rates. By implementing the Early Warning System, powered by Intel® AI Analytics Toolkits, educational institutions can improve student retention, foster a supportive learning environment, and contribute to the long-term success of students.

Overall, the project highlighted the potential of AI analytics and oneAPI in addressing the challenge of student dropout, emphasizing the importance of data-driven decision making, personalization, collaboration, continuous improvement, and ultimately, the positive impact on student success.
