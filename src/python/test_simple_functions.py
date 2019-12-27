import simple_functions
import unittest

class TestSimple(unittest.TestCase):
    def test_test(self):
        print("the test works correctly")

    def test_email(self):
        self.assertEqual("josh.hutch@evolveu.ca", simple_functions.email("josh","hutch"))
        self.assertEqual("josh.hutch@evolveu.ca", simple_functions.email("Josh","HUTCH"))
        self.assertEqual("karen.han@evolveu.ca", simple_functions.email("Karen","Han"))
        self.assertEqual("家衞.王@evolveu.ca", simple_functions.email("家衞","王"))
        self.assertEqual(None, simple_functions.email(1,"Hello"))

if __name__ == '__main__':
    unittest.main()
