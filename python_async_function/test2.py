import asyncio
import random


async def my_async_function1(n):
    print("Début de my_async_function1")
    await asyncio.sleep(n)
    print("Fin de my_async_function1")
    return f'top1: {round(n, 2)} secondes'


async def my_async_function2(n):
    print("Début de my_async_function2")
    await asyncio.sleep(n)
    print("Fin de my_async_function2")
    return f'top2: {round(n, 2)} secondes'


async def main():
    # Stocke les coroutines dans une liste
    tasks = [my_async_function1(random.uniform(0, 5)),
             my_async_function2(random.uniform(0, 5))]
    # Attend que toutes les coroutines se terminent et récupère les résultats
    results = await asyncio.gather(*tasks)
    # Affiche les résultats récupérés
    print("Résultats récupérés :", results)

# Lancement de l'événement de boucle
asyncio.run(main())
