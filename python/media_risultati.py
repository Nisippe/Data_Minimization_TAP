import pandas as pd
import os

paths_1 = [
    'Risultati/Mistral/error_rate_generate_variants.txt',
    'Risultati/LLAMA/error_rate_generate_variants.txt',
    'Risultati/Gemma/error_rate_generate_variants.txt',
]

paths_2 = ['Risultati/Mistral/error_rate_generate_deterministic_variants.txt',
        'Risultati/LLAMA/error_rate_generate_deterministic_variants.txt',
        'Risultati/Gemma/error_rate_generate_deterministic_variants.txt',]

paths_3 = ['Risultati/Mistral/error_rate_generate_non_deterministic_variants.txt',
        'Risultati/LLAMA/error_rate_generate_non_deterministic_variants.txt',
        'Risultati/Gemma/error_rate_generate_non_deterministic_variants.txt',]

with open('Risultati/media_risultati_1.txt', 'a', encoding='utf-8') as f:

    f.write('nome_file_test,error_rate_1,error_rate_2\n')

    for path in paths_1:
        df = pd.read_csv(path)

        mean_error_rate_1 = df['error_rate_1'].mean()
        mean_error_rate_2 = df['error_rate_2'].mean()
        file_name = os.path.basename(path)
        f.write(f"{file_name},{mean_error_rate_1},{mean_error_rate_2}\n")

        print(f"Media di 'error rate 1' per {file_name}: {mean_error_rate_1}")
        print(f"Media di 'error rate 2' per {file_name}: {mean_error_rate_2}")

with open('Risultati/media_risultati_2.txt', 'a', encoding='utf-8') as f:

    f.write('nome_file_test,error_rate_1,error_rate_2\n')

    for path in paths_2:
        df = pd.read_csv(path)

        mean_error_rate_1 = df['error_rate_1'].mean()
        mean_error_rate_2 = df['error_rate_2'].mean()
        file_name = os.path.basename(path)
        f.write(f"{file_name},{mean_error_rate_1},{mean_error_rate_2}\n")

        print(f"Media di 'error rate 1' per {file_name}: {mean_error_rate_1}")
        print(f"Media di 'error rate 2' per {file_name}: {mean_error_rate_2}")
        
with open('Risultati/media_risultati_3.txt', 'a', encoding='utf-8') as f:

    f.write('nome_file_test,error_rate_1,error_rate_2\n')

    for path in paths_3:
        df = pd.read_csv(path)

        mean_error_rate_1 = df['error_rate_1'].mean()
        mean_error_rate_2 = df['error_rate_2'].mean()
        file_name = os.path.basename(path)
        f.write(f"{file_name},{mean_error_rate_1},{mean_error_rate_2}\n")

        print(f"Media di 'error rate 1' per {file_name}: {mean_error_rate_1}")
        print(f"Media di 'error rate 2' per {file_name}: {mean_error_rate_2}")