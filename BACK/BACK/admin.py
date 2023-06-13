from django.contrib import admin
#from .models import Users
from .models import Msc
from .models import MscUsers
from .models import Hlr, HlrMsc, HlrUsers

#admin.site.register(Users)
admin.site.register(Msc)
admin.site.register(MscUsers)
admin.site.register(Hlr)
admin.site.register(HlrUsers)
admin.site.register(HlrMsc)