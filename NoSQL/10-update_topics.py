#!/usr/bin/env python3
"""Contient la fonction update_topics"""


def update_topics(mongo_collection, name, topics):
    """met à jour les documents dont 'name' est = à name passé en argument"""

    # remplace/créé valeur 'topics' par la liste topics passé en argument
    # si méthode update_one (et non pas update_many) avait été utilisée seule
    # le premier document trouvé aurait été mis à jour
    mongo_collection.update_many({'name': name}, {'$set': {'topics': topics}})
