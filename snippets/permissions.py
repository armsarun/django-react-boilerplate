from rest_framework import permissions

class IsOwnerorReadonly(permissions.BasePermission):
    """
    Allow snippet created user to edit other to view only

    """

    def has_object_permission(self, request, view, obj):
        #read permission allowed to all users so get, head is open to all
        if request.method in permissions.SAFE_METHODS:
            return True

        #write permission allowed to snippet owner

        return obj.owner == request.user