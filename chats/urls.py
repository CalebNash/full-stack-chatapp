from django.urls import path


from .views import MessageListCreateView



urlpatterns = [
    # path('<int:pk>/', MessageRetrieveView.as_view()),
    path('', MessageListCreateView.as_view()),
]
