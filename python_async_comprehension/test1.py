#!/usr/bin/env python3

import asyncio


async def toto():
    yield "Première valeur"
    await asyncio.sleep(3)  # Attente asynchrone de 1 seconde
    yield "Deuxième valeur"
    await asyncio.sleep(3)  # Attente asynchrone de 1 seconde
    yield "Troisième valeur"


# Exemple d'utilisation
async def main():
    async for value in toto():
        print(value)

# Lancement de l'événement de boucle
asyncio.run(main())
