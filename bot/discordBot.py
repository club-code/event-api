# Bot Discord qui sert d'interface entre l'API et Discord

import discord
from discord.ext import commands
import random

from token import TOKEN

client = commands.Bot(command_prefix = '.')



@client.event
async def on_ready():
    print('bot is ready')

@client.command()
async def ping():
    await client.say("Wesh (eh non, ping c'est démodé)")

@client.command(pass_context=True)
async def createEvent(ctx, nomEvent, *options):
    """
    create an event with it's options
    Synopsys : .createEvent nomEvent option1 option2 ...
    """
    event = Event(nomEvent)
    for i in options:
        if i[:5] == "date=":
            event.addDate(i[5:])
        else :
            event.addOption(i)

class Event:
    def __init__(self, name):
        self.name = name
        self.date = ""
        self.options = []
        self.participants = []

    def addDate(self, date):
        self.date = date

    def addOption(self, option):
        self.options.append(option)

client.run(TOKEN)
