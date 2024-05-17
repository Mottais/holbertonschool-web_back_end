import asyncio
import random


async def my_async_function(n):
    print("Début de l'opération asynchrone", n)
    # Simulation d'une opération asynchrone (de 0 à 2 secondes aléatoirement)
    await asyncio.sleep(n)
    print("Fin de l'opération asynchrone", n)


async def main():
    await asyncio.gather(
        my_async_function(random.uniform(1, 2)),
        my_async_function(random.uniform(1, 2))
        )
    await asyncio.gather(
        my_async_function(random.uniform(0, 1)),
        my_async_function(random.uniform(0, 1))
        )

# Lancement de l'événement de boucle
asyncio.run(main())
