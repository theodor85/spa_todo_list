from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "spa_todo_list.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import spa_todo_list.users.signals  # noqa F401
        except ImportError:
            pass
