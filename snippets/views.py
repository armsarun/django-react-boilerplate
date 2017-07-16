from django.contrib.auth.models import User
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics, permissions
from rest_framework.decorators import api_view, detail_route
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers,viewsets

from models import Snippet
from permissions import IsOwnerorReadonly
from serializers import SnippetSerializer, UserSerializer




class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
     Viewset provides default list and detail view
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SnippetViewSet(viewsets.ModelViewSet):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                            IsOwnerorReadonly,)

    @detail_route(renderer_classes=renderers.StaticHTMLRenderer)
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class HomepageView(TemplateView):
    template_name = "snippets/index.html"

