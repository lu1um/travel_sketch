from django.db import models
from django.conf import settings
from imagekit.models import ProcessedImageField
from imagekit.processors import Thumbnail


class tag(models.Model):
    name = models.CharField(max_length=100)
    thumbnail = ProcessedImageField(
        blank=True,
        upload_to='tag/',
        processors=[Thumbnail(200, 200)],
        format='JPEG',
        options={'quality': 60},
    )


class region(models.Model):
    name = models.CharField(max_length=100)


class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='articles')
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_articles', blank=True)
    region = models.ManyToManyField(region)
    tag = models.ManyToManyField(tag, related_name='articles', blank=True)
    type = models.IntegerField()
    title = models.CharField(max_length=100)
    thumbnail = ProcessedImageField(
        blank=True,
        upload_to='tag/',
        processors=[Thumbnail(200, 200)],
        format='JPEG',
        options={'quality': 60},
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    travel_date = models.DateTimeField()
    viewcount = models.IntegerField()


class comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class news(models.Model):
    region = models.ManyToManyField(region, related_name='regions', blank=True)
    title = models.CharField(max_length=100)
    originallink = models.URLField()
    link = models.URLField()
    description = models.TextField()
    pubDate = models.DateTimeField()