from django.test import TestCase
from backend.views import index

class ViewsTest(TestCase):

    def test_index(self):
        response = index("request")
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'status' : "I'm here"})
        