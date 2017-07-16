from django.conf.urls import url, include
import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^react', views.HomepageView.as_view()),
    url(r'^api-auth', include('rest_framework.urls'))
]
