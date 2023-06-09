{
  "cells": [
    {
      "cell_type": "code",
      "source": [
        "import pandas as pd\n",
        "from sklearn.cluster import KMeans\n",
        "\n",
        "# Load the dataset\n",
        "data = pd.read_csv('dataset.csv')\n",
        "\n",
        "# Select the features for clustering\n",
        "features = data[['Attendance (%)', 'GPA', 'CGPA']]\n",
        "\n",
        "# Normalize the features\n",
        "features = (features - features.mean()) / features.std()\n",
        "\n",
        "# Build the k-means clustering model\n",
        "kmeans = KMeans(n_clusters=100)  # Set the desired number of clusters\n",
        "kmeans.fit(features)\n",
        "\n",
        "# Get the cluster labels\n",
        "cluster_labels = kmeans.labels_\n",
        "\n",
        "# Add the cluster labels to the dataset\n",
        "data['Cluster'] = cluster_labels\n",
        "\n",
        "# Calculate the drop percentage in each cluster\n",
        "drop_percentages = data.groupby('Cluster')['DROP'].apply(lambda x: sum(x == 'YES') / len(x) * 99)\n",
        "\n",
        "# Print the drop percentages\n",
        "print(drop_percentages)\n",
        "\n",
        "# Create a target variable column based on 'DROP'\n",
        "data['Target'] = (data['DROP'] == 'YES').astype(int)\n",
        "\n",
        "# Save the modified dataset\n",
        "data.to_csv('modified_dataset.csv', index=False)"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "rmaH0ZxF8wbT",
        "outputId": "120646ba-8cc8-4ed6-f034-d81ff0af1ad2"
      },
      "execution_count": null,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stderr",
          "text": [
            "/usr/local/lib/python3.10/dist-packages/sklearn/cluster/_kmeans.py:870: FutureWarning: The default value of `n_init` will change from 10 to 'auto' in 1.4. Set the value of `n_init` explicitly to suppress the warning\n",
            "  warnings.warn(\n"
          ]
        },
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Cluster\n",
            "0      0.0\n",
            "1     99.0\n",
            "2      0.0\n",
            "3      0.0\n",
            "4     99.0\n",
            "      ... \n",
            "90     0.0\n",
            "93     0.0\n",
            "95     0.0\n",
            "96     0.0\n",
            "99     0.0\n",
            "Name: DROP, Length: 91, dtype: float64\n"
          ]
        },
        {
          "output_type": "stream",
          "name": "stderr",
          "text": [
            "<ipython-input-11-a5eeb41f66d4>:15: ConvergenceWarning: Number of distinct clusters (91) found smaller than n_clusters (100). Possibly due to duplicate points in X.\n",
            "  kmeans.fit(features)\n"
          ]
        }
      ]
    }
  ],
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "display_name": "Python 3",
      "name": "python3"
    },
    "language_info": {
      "name": "python"
    },
    "accelerator": "TPU",
    "gpuClass": "standard"
  },
  "nbformat": 4,
  "nbformat_minor": 0
}