from django.shortcuts import render
from time import gmtime, strftime
    
def index(request):
    context = {
        "time": strftime("%m-%d-%Y %H:%M %p", gmtime()),
    }
    return render(request,'time_display_app/index.html', context)

