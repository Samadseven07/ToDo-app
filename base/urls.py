from django.urls import path
from base.views import TaskList, TaskDetail, TaskCreate, TaskUpdate, TaskDelete, CustomLoginView, RegisterPage
from django.contrib.auth.views import LogoutView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [

    path("login/", CustomLoginView.as_view(), name ="login"),
    path("logout/", LogoutView.as_view(next_page="tasks"), name="logout"),
    path("", TaskList.as_view(), name="tasks"),
    path("register/", RegisterPage.as_view(), name="register"),
    path("task/<int:pk>/", TaskDetail.as_view(), name="task"),
    path("task-create/", TaskCreate.as_view(), name="task-create"),
    path("task-update/<int:pk>/", TaskUpdate.as_view(), name="task-update"),
    path("task-delete/<int:pk>/", TaskDelete.as_view(), name="task-delete"),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
