from django.urls import path


from .views import MessageListCreateView, MessageRetrieveView



urlpatterns = [
    path('<int:pk>/', MessageRetrieveView.as_view()),
    path('', MessageListCreateView.as_view()),
]
