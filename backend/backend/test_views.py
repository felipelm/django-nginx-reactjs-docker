from django.test import TestCase
from backend.views import index

class ViewsTest(TestCase):

    def test_event(self):
        response = index("request")
        self.assertEqual(response.status_code, 200)
