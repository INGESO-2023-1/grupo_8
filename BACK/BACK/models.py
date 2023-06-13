from django.db import models


class Hlr(models.Model):
    hlr_id = models.AutoField(primary_key=True)

    class Meta:
        managed = True
        db_table = 'hlr'


class HlrMsc(models.Model):
    hlr = models.ForeignKey(Hlr, models.DO_NOTHING)
    msc = models.ForeignKey('Msc', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'hlr_msc'


class HlrUsers(models.Model):
    hlr = models.ForeignKey(Hlr, models.DO_NOTHING)
    #user = models.ForeignKey('Users', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'hlr_users'


class Messages(models.Model):
    message = models.TextField()
    date_time = models.DateTimeField(blank=True, null=True)
    #receiver = models.ForeignKey('Users', models.DO_NOTHING, db_column='receiver')
    #sender = models.ForeignKey('Users', models.DO_NOTHING, db_column='sender', related_name='messages_sender_set')

    class Meta:
        managed = True
        db_table = 'messages'


class Msc(models.Model):
    msc_id = models.AutoField(primary_key=True)
    hlr = models.ForeignKey(Hlr, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'msc'


class MscUsers(models.Model):
    msc = models.ForeignKey(Msc, models.DO_NOTHING)
    #user = models.ForeignKey('Users', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'msc_users'

"""
class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=255)
    user_pass = models.CharField(max_length=255)
    msc_id = models.ForeignKey(Msc, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'users'
"""