# Generated by Django 4.2.1 on 2023-06-27 04:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hlr',
            fields=[
                ('hlr_id', models.AutoField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'hlr',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('date_time', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'messages',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Msc',
            fields=[
                ('msc_id', models.AutoField(primary_key=True, serialize=False)),
                ('hlr', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='BACK.hlr')),
            ],
            options={
                'db_table': 'msc',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='MscUsers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msc', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='BACK.msc')),
            ],
            options={
                'db_table': 'msc_users',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='HlrUsers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hlr', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='BACK.hlr')),
            ],
            options={
                'db_table': 'hlr_users',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='HlrMsc',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hlr', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='BACK.hlr')),
                ('msc', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='BACK.msc')),
            ],
            options={
                'db_table': 'hlr_msc',
                'managed': True,
            },
        ),
    ]
